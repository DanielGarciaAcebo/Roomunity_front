import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FullCalendarModule } from '@fullcalendar/angular';

import { CalendarOptions, EventInput, DateSelectArg, EventClickArg } from '@fullcalendar/core';

import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';

@Component({
  selector: 'app-calendar',
  standalone: true,
  imports: [CommonModule, FullCalendarModule],
  templateUrl: './calendar.component.html',
})
export class CalendarComponent implements OnInit {
  // Event list is kept in memory for now (later: API)
  events: EventInput[] = [];

  calendarOptions: CalendarOptions = {
    height: 'auto',
    handleWindowResize: true,       // Keeps sizing updated on resize. :contentReference[oaicite:2]{index=2}
    expandRows: true,               // Useful for timeGrid views to stretch rows. :contentReference[oaicite:3]{index=3}

    initialView: 'dayGridMonth',
    plugins: [dayGridPlugin, timeGridPlugin, interactionPlugin],
    headerToolbar: {
      left: 'prev,next today',
      center: 'title',
      right: 'dayGridMonth,timeGridWeek,timeGridDay',
    },
    selectable: true,
    selectMirror: true,

    // Bind handlers
    select: (arg) => this.handleSelect(arg),
    eventClick: (arg) => this.handleEventClick(arg),
  };

  ngOnInit(): void {
    // Load persisted events (basic hub = don't lose data on refresh)
    const raw = localStorage.getItem('roomunity.calendar.events');
    if (raw) {
      try {
        this.events = JSON.parse(raw) as EventInput[];
      } catch {
        this.events = [];
      }
    }
  }

  private persist(): void {
    localStorage.setItem('roomunity.calendar.events', JSON.stringify(this.events));
  }

  private handleSelect(arg: DateSelectArg): void {
    // Simple UX for now. Later: modal.
    const title = prompt('Titulo del evento?');
    arg.view.calendar.unselect();

    if (!title) return;

    const newEvent: EventInput = {
      id: String(Date.now()),
      title,
      start: arg.startStr,
      end: arg.endStr,
      allDay: arg.allDay,
    };

    // Reassign array to trigger change detection
    this.events = [...this.events, newEvent];
    this.persist();
  }

  private handleEventClick(arg: EventClickArg): void {
    const ok = confirm(`Delete "${arg.event.title}"?`);
    if (!ok) return;

    const id = arg.event.id;
    this.events = this.events.filter((e) => String((e as any).id) !== id);
    this.persist();
  }
}
