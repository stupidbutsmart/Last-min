# Instructions

Handle only errors listed - return appropriate message.

Clone , do not commit or push, idw to see your code.

Setup handled

# q1

**POST /reminders:**

Create a reminder

Example body:

```json
{
  "title": "Doc Appointment",
  "content": "Colonoscopy at 10 at Jovan's House",
  "due_date": "12-12-2025",
  "owner_id": 1
}
```

Response<201>:

```json
{
  "message": "Reminder Created!",
  "reminder": {
    "id": 1,
    "title": "Doc Appointment",
    "content": "Colonoscopy at 10 at Jovan's House",
    "due_date": "12-12-2025",
    "owner_id": 1
  }
}
```

Errors<400>

# q2

**PUT /reminders/:reminderId**

Update a reminder

Example Body:

```json
{
  "title": "Doc Appointment",
  "content": "Colonoscopy at 10 at Girl Friend's House",
  "due_date": "12-12-2024"
}
```

Response<204>

Errors<400 , 404>

# q3

**DEL /reminders/:reminderId**

Deletes a reminder.

Response<204>

Errors<404>

# q4

**GET /users/:userId**

Returns all the reminders associated to the user

Response<200>:

```json
[
  {
    "id": 1,
    "title": "Doc Appointment",
    "content": "Colonoscopy at 10 at Jovan's House",
    "due_date": "12-12-2025",
    "owner_id": 1
  },
  {
    "id": 3,
    "title": "BED Exam",
    "content": "I'm Fucked",
    "due_date": "05-12-2024",
    "owner_id": 1
  },
  {
    "id": 4,
    "title": "Donating $10000",
    "content": "Today i will be giving away $10000 as an offering in hopes to pass BED",
    "due_date": "01-12-2024",
    "owner_id": 1
  }
]
```

Errors<404>

# q5

**GET /users/:userId/overdue**

Returns all overdue reminders.

Response<200>:

```json
[
  {
    "id": 4,
    "title": "Donating $10000",
    "content": "Today i will be giving away $10000 as an offering in hopes to pass BED",
    "due_date": "01-12-2024",
    "owner_id": 1
  }
]
```

Errors<404>

# q6

**DEL /users/:userId**

Removes user and all reminders that user created.

Response<204>:

Errors<404>
