
import React, { useState, useEffect } from 'react';
import Sidebar from './Sidebar';
import axios from 'axios';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import {
  EventCalendarContainer,
  Content,
  CalendarContainer,
  Events,
  Event,
  AddEventForm,
  EventInput,
  AddEventButton,
  ErrorText,
  DatePickerWrapper,
} from '../../styles/EventCalendarStyles';
import { FaCalendar } from 'react-icons/fa';

const EventCalendar = () => {
  const [events, setEvents] = useState([]);
  const [newEvent, setNewEvent] = useState('');
  const [selectedDate, setSelectedDate] = useState(null);
  const [error, setError] = useState(null);

  // Function to fetch events from the backend
  const fetchEvents = async () => {
    try {
      const response = await axios.get('http://localhost:4000/api/v1/events/getall');
      setEvents(response.data.events || []);
    } catch (error) {
      console.error('Error fetching events:', error);
      setError('Error fetching events');
    }
  };

  useEffect(() => {
    fetchEvents();
  }, []);

  // Function to add a new event
  const addEvent = async (e) => {
    e.preventDefault();

    // Validation for missing fields
    if (!newEvent || !selectedDate) {
      setError('Please enter an event name and select a date.');
      return;
    }

    try {
      // Format the selected date to ISO string (backend expects a Date object or ISO string)
      const formattedDate = selectedDate.toISOString();

      // Make the API call with both event and date
      const response = await axios.post('http://localhost:4000/api/v1/events', {
        event: newEvent,
        date: formattedDate, // Send formatted date
      });

      // Update state with new event
      setEvents([...events, response.data.event]);
      setNewEvent('');
      setSelectedDate(null);
      setError(null);
    } catch (error) {
      console.error('Error adding event:', error);
      if (error.response?.data?.error) {
        setError(error.response.data.error);
      } else {
        setError('Error adding event');
      }
    }
  };

  return (
    <EventCalendarContainer>
      <Sidebar />
      <Content>
        <h1>Events & Calendar</h1>
        <CalendarContainer>
          <FaCalendar size={28} />
          <DatePickerWrapper>
            <DatePicker
              selected={selectedDate}
              onChange={(date) => setSelectedDate(date)}
              placeholderText="Select a date"
              dateFormat="MMMM d, yyyy"
            />
          </DatePickerWrapper>
        </CalendarContainer>
        <AddEventForm onSubmit={addEvent}>
          <h2>Add New Event</h2>
          <EventInput
            type="text"
            value={newEvent}
            onChange={(e) => setNewEvent(e.target.value)}
            placeholder="Enter Event Name"
          />
          <AddEventButton type="submit">Add Event</AddEventButton>
        </AddEventForm>
        {error && <ErrorText>{error}</ErrorText>}
        <Events>
          <h2>Upcoming Events</h2>
          {events.map((event, index) => (
            <Event key={index}>
              <strong>{event.event}</strong> -{' '}
              {new Date(event.date).toLocaleDateString()}
            </Event>
          ))}
        </Events>
      </Content>
    </EventCalendarContainer>
  );
};

export default EventCalendar;
