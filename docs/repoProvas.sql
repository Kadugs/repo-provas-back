CREATE TABLE public.tests (
	"id" serial NOT NULL,
	"link" varchar(765) NOT NULL,
	"semester_id" integer NOT NULL,
	"category_id" integer NOT NULL,
	"subject_id" integer NOT NULL,
	"teacher_id" integer NOT NULL,
	CONSTRAINT "tests_pk" PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);



CREATE TABLE public.semesters (
	"id" serial NOT NULL,
	"semester" varchar(255) NOT NULL,
	CONSTRAINT "semesters_pk" PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);



CREATE TABLE public.test_categories (
	"id" serial NOT NULL,
	"category" varchar(255) NOT NULL,
	CONSTRAINT "test_categories_pk" PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);



CREATE TABLE public.subjects (
	"id" serial NOT NULL,
	"subject" varchar(255) NOT NULL,
	CONSTRAINT "subjects_pk" PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);



CREATE TABLE public.teachers (
	"id" serial NOT NULL,
	"name" varchar(255) NOT NULL,
	CONSTRAINT "teachers_pk" PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);

CREATE TABLE public.teachers_subjects (
	"id" serial NOT NULL,
	"subject_id" integer NOT NULL,
	"teacher_id" integer NOT NULL,
	CONSTRAINT "teachers_subjects_pk" PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);



ALTER TABLE "tests" ADD CONSTRAINT "tests_fk0" FOREIGN KEY ("semester_id") REFERENCES "semesters"("id");
ALTER TABLE "tests" ADD CONSTRAINT "tests_fk1" FOREIGN KEY ("category_id") REFERENCES "test_categories"("id");
ALTER TABLE "tests" ADD CONSTRAINT "tests_fk2" FOREIGN KEY ("subject_id") REFERENCES "subjects"("id");
ALTER TABLE "tests" ADD CONSTRAINT "tests_fk3" FOREIGN KEY ("teacher_id") REFERENCES "teachers"("id");










ALTER TABLE "teachers_subjects" ADD CONSTRAINT "teachers_subjects_fk0" FOREIGN KEY ("subject_id") REFERENCES "subjects"("id");
ALTER TABLE "teachers_subjects" ADD CONSTRAINT "teachers_subjects_fk1" FOREIGN KEY ("teacher_id") REFERENCES "teachers"("id");