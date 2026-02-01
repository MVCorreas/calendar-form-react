"use client";

import { useState } from "react";
import Form from "./components/Form";
import EventsContainer from "./components/EventsContainer";

export default function Home() {
  const [formData, setFormData] = useState({
    title: "",
    date: "",
    description: "",
  });
  const [errors, setErrors] = useState({
    title: "",
    date: "",
    description: "",
  });
  const [submittedData, setSubmittedData] = useState([]);

  const validateForm = () => {
    const newErrors = {};
    const today = new Date();

    if (!formData.title.trim()) {
      newErrors.title = "Please, enter a title";
    } else if (formData.title.length > 50) {
      newErrors.title = "Title must not exceed 50 characters";
    }

    if (!formData.date.trim()) {
      newErrors.date = "Please, enter a date";
    } else if (new Date(formData.date) < today) {
      newErrors.date = "The date must be later than today";
    }

    if (!formData.description.trim()) {
      newErrors.description = "Please, enter a description";
    } else if (formData.description.length > 200) {
      newErrors.description = "The description must not exceed 50 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const updateFields = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
    setErrors((prev) => ({
      ...prev,
      [field]: "",
    }));
  };

  const handleSubmit = (e) => {
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
