"use client";

import { useState } from "react";
import Form from "./components/Form";
import EventsContainer from "./components/EventsContainer";
import { FormFields, FieldErrors, Event } from "./types";

const VALIDATION = {
  TITLE_MAX: 50,
  DESCRIPTION_MAX: 200,
};

export default function Home() {
  const [formData, setFormData] = useState<FormFields>({
    title: "",
    date: "",
    description: "",
  });
  const [errors, setErrors] = useState<FieldErrors>({
    title: "",
    date: "",
    description: "",
  });
  const [submittedData, setSubmittedData] = useState<Event[]>([]);

  const validateForm = () => {
    const newErrors: Partial<FieldErrors> = {};
    const today = new Date();

    if (!formData.title.trim()) {
      newErrors.title = "Please, enter a title";
    } else if (formData.title.length > VALIDATION.TITLE_MAX) {
      newErrors.title = "Title must not exceed 50 characters";
    }

    if (!formData.date.trim()) {
      newErrors.date = "Please, enter a date";
    } else if (new Date(formData.date) < today) {
      newErrors.date = "The date must be later than today";
    }

    if (!formData.description.trim()) {
      newErrors.description = "Please, enter a description";
    } else if (formData.description.length > VALIDATION.DESCRIPTION_MAX) {
      newErrors.description = "The description must not exceed 50 characters";
    }

    setErrors(newErrors as FieldErrors);
    return Object.keys(newErrors).length === 0;
  };

  const updateFields = (field: keyof FormFields, value: string) => { //keyof --> Typescript ensures we only pass valid field names
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
    setErrors((prev) => ({
      ...prev,
      [field]: "",
    }));
  };

  const handleSubmit = (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (validateForm()) {
    const newEvent = {
      id: Date.now(),
      title: formData.title,
      date: formData.date,
      description: formData.description
    }
      setSubmittedData(prev => [...prev, newEvent]); //only adds data on submission
      setFormData({
        title: "",
        date: "",
        description: "",
      });
       setErrors({
        title: "",
        date: "",
        description: "",
      });
    }
  };
  return (
    <main className="flex min-h-screen w-full bg-zinc-50 items-center justify-between p-8">
      <div className="w-1/3 ml-30">
        <Form
          updateFields={updateFields}
          title={formData.title}
          date={formData.date}
          description={formData.description}
          handleSubmit={handleSubmit}
          errors={errors}
        />
      </div>
      <div className="w-1/3 mr-20">
        <EventsContainer events={submittedData} />
      </div>
    </main>
  );
}
