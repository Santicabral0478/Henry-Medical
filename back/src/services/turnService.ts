import { Appointment } from "../interfaces/ITurn";

let appointments: Appointment[] = [];

export const appointmentService = {
  getAllAppointments: (): Appointment[] => {
    return appointments;
  },
  getAppointmentById: (id: number): Appointment | undefined => {
    return appointments.find(appointment => appointment.id === id);
  },
  createAppointment: (date: string, time: string, userId: number): void => {
    if (userId) {
      const newAppointment: Appointment = {
        id: appointments.length + 1,
        date,
        time,
        userId,
        status: "active"
      };
      appointments.push(newAppointment);
    }
  },
  cancelAppointment: (id: number): void => {
    const appointmentIndex = appointments.findIndex(appointment => appointment.id === id);
    if (appointmentIndex !== -1) {
      appointments[appointmentIndex].status = "cancelled";
    }
  }
};
