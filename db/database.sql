CREATE TABLE "participants" (
  "id" int PRIMARY KEY,
  "name" varchar NOT NULL,
  "surname" varchar NOT NULL,
  "email" varchar NOT NULL,
  "phone_number" varchar NOT NULL,
  "password" varchar NOT NULL,
  "role_id" int,
  "play_id" int,
  FOREIGN KEY ("role_id") REFERENCES "participant_roles" ("id"),
  FOREIGN KEY ("play_id") REFERENCES "plays" ("id")
);

CREATE TABLE "participant_roles" (
  "id" int PRIMARY KEY,
  "role" varchar UNIQUE NOT NULL
);

CREATE TABLE "plays" (
  "id" int PRIMARY KEY,
  "name" varchar NOT NULL,
  "classification_id" int NOT NULL,
  "type_id" int NOT NULL,
  FOREIGN KEY ("classification_id") REFERENCES "play_classifications" ("id"),
  FOREIGN KEY ("type_id") REFERENCES "play_types" ("id")
);

CREATE TABLE "play_classifications" (
  "id" int PRIMARY KEY,
  "classification" varchar UNIQUE NOT NULL
);

CREATE TABLE "play_types" (
  "id" int PRIMARY KEY,
  "type" varchar UNIQUE NOT NULL
);

CREATE TABLE "tickets" (
  "id" int PRIMARY KEY,
  "price" float NOT NULL,
  "type_id" int NOT NULL,
  "session_id" int NOT NULL,
  FOREIGN KEY ("type_id") REFERENCES "ticket_types" ("id"),
  FOREIGN KEY ("session_id") REFERENCES "sessions" ("id")
);

CREATE TABLE "ticket_types" (
  "id" int PRIMARY KEY,
  "type" varchar UNIQUE NOT NULL
);

CREATE TABLE "sessions" (
  "id" int PRIMARY KEY,
  "session_date" datetime NOT NULL,
  "seats" int NOT NULL,
  "play_id" int NOT NULL,
  "room_id" int NOT NULL,
  FOREIGN KEY ("play_id") REFERENCES "plays" ("id"),
  FOREIGN KEY ("room_id") REFERENCES "rooms" ("id")
);

CREATE TABLE "rooms" (
  "id" int PRIMARY KEY,
  "name" varchar NOT NULL,
  "capacity" int NOT NULL
);
