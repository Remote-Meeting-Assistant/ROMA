SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;


DROP TABLE IF EXISTS public.student;
DROP TABLE IF EXISTS public.classroom;

CREATE TABLE public.student (
    "id" serial NOT NULL,
    "first_name" varchar NOT NULL,
    "last_name" varchar NOT NULL,
    "classroom_id" int NOT NULL,
    "num_claps" int DEFAULT 0,
    "been_called" boolean DEFAULT FALSE,
    CONSTRAINT "student_pk" PRIMARY KEY("id")
);

CREATE TABLE public.classroom (
    "id" serial NOT NULL,
    "classroom_name" varchar NOT NULL,
    CONSTRAINT "classroom_pk" PRIMARY KEY("id")
);

ALTER TABLE public.student ADD CONSTRAINT "student_fk0" FOREIGN KEY ("classroom_id") REFERENCES public.classroom("id");

INSERT INTO public.classroom(classroom_name) VALUES('Cohort 57');
INSERT INTO public.classroom(classroom_name) VALUES('Cohort 58');

-- Insert into cohort 57 with the ID of 1
INSERT INTO public.student(first_name, last_name, classroom_id) VALUES ('James', 'Ye', 1);
INSERT INTO public.student(first_name, last_name, classroom_id) VALUES ('Ryan', 'Griggs', 1);
INSERT INTO public.student(first_name, last_name, classroom_id) VALUES ('Wesley', 'Waters', 1);
INSERT INTO public.student(first_name, last_name, classroom_id) VALUES ('Jonah', 'Weinbaum', 1);

-- Insert into cohort 57 with the ID of 2
INSERT INTO public.student(first_name, last_name, classroom_id) VALUES ('Jessica', 'Vo', 2);
INSERT INTO public.student(first_name, last_name, classroom_id) VALUES ('Cameron', 'McKinley', 2);