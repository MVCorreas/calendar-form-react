"use client"

import { useState } from "react";
import Form from "./components/Form";

export default function Home() {
  const [formData, setFormData] = useState({
    title: "",
    date: "",
    description: ""
  })
    const [errors, setErrors] = useState({
    title: "",
    date: "",
    description: ""
  })

  const updateFields = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value
    }))
  }
  return (
    <main className="flex min-h-screen w-full bg-zinc-50 items-center justify-between p-8">
      <div className="w-1/3 ml-30">
        <Form updateFields={updateFields} title={formData.title} date={formData.date} description={formData.description}/>
      </div>
    </main>
  );
}
