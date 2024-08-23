

const data = `2024-03-24 02:10:35 - ServiceNow API (Work notes)\nWork note copied from Parent Incident: [xMatters] - xM event ID 55549000 has an updated status of terminated\n\n2024-03-23 23:10:34 - ServiceNow API (Work notes)\nWork note copied from Parent Incident: [xMatters] - xM event ID 55549000 has an updated status of active\n\n`;

const parsedData = parseNotes(data);
console.log(parsedData);

