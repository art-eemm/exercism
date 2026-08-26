// @ts-check

/**
 * Create an appointment
 *
 * @param {number} days
 * @param {number} [now] (ms since the epoch, or undefined)
 *
 * @returns {Date} the appointment
 */
export function createAppointment(days, now = undefined) {
  let appointment = new Date()
  
  if (now !== undefined) {
    appointment = new Date(now)
  }
  const currentDay = appointment.getDate()
  appointment.setDate(currentDay + days)

  return appointment
}

/**
 * Generate the appointment timestamp
 *
 * @param {Date} appointmentDate
 *
 * @returns {string} timestamp
 */
export function getAppointmentTimestamp(appointmentDate) {
  return appointmentDate.toISOString()
}

/**
 * Get details of an appointment
 *
 * @param {string} timestamp (ISO 8601)
 *
 * @returns {Record<'year' | 'month' | 'date' | 'hour' | 'minute', number>} the appointment details
 */
export function getAppointmentDetails(timestamp) {
  const date = new Date(timestamp)
  const obj = {date: date.getDate(), hour: date.getHours(), minute: date.getMinutes(), month: date.getMonth(), year: date.getFullYear()}
  return obj
}

/**
 * Update an appointment with given options
 *
 * @param {string} timestamp (ISO 8601)
 * @param {Partial<Record<'year' | 'month' | 'date' | 'hour' | 'minute', number>>} options
 *
 * @returns {Record<'year' | 'month' | 'date' | 'hour' | 'minute', number>} the appointment details
 */
export function updateAppointment(timestamp, options) {
  const date = new Date(timestamp)

  if (options.date !== undefined) date.setDate(options.date)
  if (options.hour !== undefined) date.setHours(options.hour)
  if (options.minute !== undefined) date.setMinutes(options.minute)
  if (options.month !== undefined) date.setMonth(options.month)
  if (options.year !== undefined) date.setFullYear(options.year)
  
  return getAppointmentDetails(date.toISOString())
}

/**
 * Get available time in seconds (rounded) between two appointments
 *
 * @param {string} timestampA (ISO 8601)
 * @param {string} timestampB (ISO 8601)
 *
 * @returns {number} amount of seconds (rounded)
 */
export function timeBetween(timestampA, timestampB) {
  const dateA = new Date(timestampA)
  const dateB = new Date(timestampB)

  const difference = Math.abs(dateB - dateA) / 1000

  return Math.round(difference)
}

/**
 * Get available times between two appointment
 *
 * @param {string} appointmentTimestamp (ISO 8601)
 * @param {string} currentTimestamp (ISO 8601)
 */
export function isValid(appointmentTimestamp, currentTimestamp) {
  const appointment = new Date(appointmentTimestamp)
  const currentDate = new Date(currentTimestamp)

  if (appointment > currentDate) {
    return true
  }

  return false
}
