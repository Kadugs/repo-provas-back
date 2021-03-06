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
	"period_id" integer NOT NULL,
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

CREATE TABLE public.periods (
	"id" serial NOT NULL,
	"period" varchar(255) NOT NULL,
	CONSTRAINT "preiods_pk" PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);


ALTER TABLE "tests" ADD CONSTRAINT "tests_fk0" FOREIGN KEY ("semester_id") REFERENCES "semesters"("id");
ALTER TABLE "tests" ADD CONSTRAINT "tests_fk1" FOREIGN KEY ("category_id") REFERENCES "test_categories"("id");
ALTER TABLE "tests" ADD CONSTRAINT "tests_fk2" FOREIGN KEY ("subject_id") REFERENCES "subjects"("id");
ALTER TABLE "tests" ADD CONSTRAINT "tests_fk3" FOREIGN KEY ("teacher_id") REFERENCES "teachers"("id");

ALTER TABLE "teachers_subjects" ADD CONSTRAINT "teachers_subjects_fk0" FOREIGN KEY ("subject_id") REFERENCES "subjects"("id");
ALTER TABLE "teachers_subjects" ADD CONSTRAINT "teachers_subjects_fk1" FOREIGN KEY ("teacher_id") REFERENCES "teachers"("id");

ALTER TABLE "subjects" ADD CONSTRAINT "subjects_fk0" FOREIGN KEY ("period_id") REFERENCES "periods"("id");


COPY public.periods (id, period) FROM stdin;
1	1o  
2	2o  
3	3o  
4	4o  
5	5o  
6	6o  
7	7o  
8	8o  
9	9o  
10	eletivas  
11	optativas  
\.

COPY public.semesters (id, semester) FROM stdin;
1	2020.1   
2	2020.2  
3	2021.1  
4	2021.2  
5	2022.1  
6	2022.2  
7	2023.1  
8	2023.2  
\.


COPY public.subjects (id, subject, period_id) FROM stdin;
1	Fisica I	1   \n
5	Calculo I	1   \n
9	Algoritmos	1   \n
10	Geometria analitica	1   \n
2	Fisica II	2   \n
6	Calculo II	2   \n
3	Fisica III	3   \n
7	Calculo III	3   \n
4	Fisica IV	4   \n
8	Calculo IV	4   \n
11	Estruturas de dados	5   \n
12	fundamentos da computa??ao	6   \n
13	Algebra linear	7   \n
14	Orienta??ao a objetos	10   \n
15	Banco de dados	11   \n
\.


COPY public.teachers (id, name) FROM stdin;
1	lele  
2	bruninha  
3	sidim  
4	tia nivea  
5	girafales  
\.


COPY public.teachers_subjects (id, subject_id, teacher_id) FROM stdin;
1	1	1   
2	2	1   
3	3	1   
4	4	1   
5	5	2   
6	6	2   
7	7	2   
8	8	2   
9	9	3   
10	10	3   
11	11	4   
12	12	4   
13	13	5   
14	14	5   
15	15	5   
\.


COPY public.test_categories (id, category) FROM stdin;
1	P1
2	P2
3	P3
4	2ch
5	Outras
\.


COPY public.tests (id, link, semester_id, category_id, subject_id, teacher_id) FROM stdin;
1	https://download.inep.gov.br/enem/provas_e_gabaritos/2021_PV_impresso_D1_CD1.pdf	1	1	1	1   \n
2	https://download.inep.gov.br/enem/provas_e_gabaritos/2021_PV_impresso_D1_CD1.pdf	2	2	2	1   \n
3	https://download.inep.gov.br/enem/provas_e_gabaritos/2021_PV_impresso_D1_CD1.pdf	7	3	1	1   \n
4	google.com	1	1	5	2   \n
5	https://download.inep.gov.br/educacao_basica/enem/provas/2012/caderno_enem2012_sab_azul.pdf	1	3	11	4   \n
6	https://download.inep.gov.br/educacao_basica/enem/provas/2012/caderno_enem2012_sab_azul.pdf	1	3	10	3   \n
\.

