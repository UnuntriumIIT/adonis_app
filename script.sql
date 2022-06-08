create table document_passport
(
    id          uuid      not null
        constraint documentpassport_pk
            primary key,
    series      text      not null,
    number      text      not null,
    giver       text      not null,
    date_issued date      not null,
    birth_place text      not null,
    created_at  timestamp not null,
    updated_at  timestamp
);

alter table document_passport
    owner to postgres;

create table address
(
    id         uuid      not null
        constraint address_pk
            primary key,
    zip_code   text      not null,
    country    text      not null,
    region     text      not null,
    city       text      not null,
    street     text      not null,
    house      text      not null,
    block      text,
    apartment  text,
    created_at timestamp not null,
    updated_at timestamp
);

alter table address
    owner to postgres;

create table client
(
    id                uuid              not null
        constraint client_pk
            primary key,
    name              text              not null,
    surname           text              not null,
    patronymic        text,
    dob               date              not null,
    spouse_id         uuid
        constraint client_client_id_fk
            references client,
    passport_id       uuid              not null
        constraint client_documentpassport_id_fk
            references document_passport,
    living_address_id uuid              not null
        constraint client_address_id_fk
            references address,
    reg_address_id    uuid              not null
        constraint client_address_id_fk_2
            references address,
    general_exp       integer default 0 not null,
    cur_work_exp      integer default 0 not null,
    cur_field_exp     integer default 0 not null,
    status            text              not null,
    type_education    text              not null,
    marital_status    text              not null,
    type_emp          text              not null,
    mon_income        numeric default 0 not null,
    mon_expenses      numeric default 0 not null,
    created_at        timestamp         not null,
    updated_at        timestamp,
    deleted_at        timestamp,
    files             jsonb,
    documents         jsonb
);

alter table client
    owner to postgres;

create table child
(
    id         uuid not null
        constraint child_pk
            primary key,
    parent_id  uuid not null
        constraint child_client_id_fk
            references client,
    name       text not null,
    surname    text not null,
    patronymic text,
    dob        date not null
);

alter table child
    owner to postgres;

create table job
(
    id             uuid              not null
        constraint job_pk
            primary key,
    company_name   text              not null,
    type           text              not null,
    date_emp       date              not null,
    date_dismissal date,
    tin            text              not null,
    address_id     uuid              not null
        constraint job_address_id_fk
            references address,
    job_title      text              not null,
    mon_income     numeric default 0 not null,
    fio_manager    text              not null,
    site           text,
    created_at     timestamp         not null,
    updated_at     timestamp,
    phone_numbers  jsonb
);

alter table job
    owner to postgres;

create table communication
(
    id       uuid not null
        constraint communication_pk
            primary key,
    type     text not null,
    value    text not null,
    owner_id uuid not null
        constraint communication_client_id_fk
            references client
);

alter table communication
    owner to postgres;


