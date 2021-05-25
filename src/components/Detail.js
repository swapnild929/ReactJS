import React from 'react';
import { useParams } from "react-router-dom";
import earthQuakeData from '../data/data.json'

export default function EarthQuakeDetail() {
  const { id } = useParams()

  const details = earthQuakeData.data.features.find(earthquake => earthquake.id === id)

  const fields = [
    { label: "Title", value: "title" },
    { label: "Magnititude", value: "mag" },
    { label: "Time", value: "time" },
    { label: "Status", value: "status" },
    { label: "Tsunami", value: "tsunami" },
    { label: "Type", value: "type" }
  ]

  const detailList = []

  fields.map(field => {
    if (field.value === "time") {
      details.properties[field.value] = new Date(details.properties[field.value]).toLocaleString()
    }

    detailList.push(
      <div className='row' key={field.value}>
        <div className='detailTab title'>
          {field.label}
        </div>
        <div className='detailTab value'>
          {details.properties[field.value]}
        </div>
      </div>
    )
  });

  return (
    <article className='container'>
      <div class="title-details">{details.properties.title}</div>
      <section>
        {detailList}
      </section>
    </article>
  )
}
