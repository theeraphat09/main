import { useEffect, useState } from "react";
import AppTable from "../../components/Table";
import { useNavigate } from "react-router-dom";

export default function Jobs() {
  const [jobs, setJobs] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    fetchJobs();
  }, []);
  const fetchJobs = async () => {
    const response = await fetch("http://localhost:3333/jobs", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });
    const json = await response.json();
    setJobs(json.results);
  };
  const columns = [
    {
      field: "name",
      label: "ชื่องาน",
      width: "20%",
    },
    {
      field: "description",
      label: "คำอธิบาย",
      width: "50%",
      align: "left",
    },
    {
      field: "email",
      label: "อีเมล",
      width: "10%",
    },
  ];
  const onRemove = async (id) => {
    fetch(`http://localhost:3333/jobs/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((res) => {
        alert(res.message);
        fetchJobs();
      });
  };
  const onCreate = () => {
    navigate("create");
  };
  const onEdit = (id) => {
    navigate(`edit/${id}`);
  };
  return (
    <div>
      <AppTable
        columns={columns}
        data={jobs}
        primary="id"
        onRemove={onRemove}
        onCreate={onCreate}
        onEdit={onEdit}
        
      />
    </div>
  );
}
