'use client';
import { useEffect, useState } from 'react';
import { fetchUpdateJob, fetchData } from '@/services/api';
import NavBar from '../Components/NavBar';

export default function Page() {
  const [title, setTitle] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [jobURL, setJobURL] = useState('');
  const [location, setLocation] = useState('');
  const [dateApplied, setDateApplied] = useState('');
  const [applicationStatus, setApplicationStatus] = useState('');
  const [interviewDate, setInterviewDate] = useState('');
  const [interviewType, setInterviewType] = useState('');
  const [salary, setSalary] = useState('');
  const [followUp, setFollowUp] = useState('');
  const [notes, setNotes] = useState('');
  const [user_id, setUser_id] = useState<any>(1);
  const [job_id, setJob_id] = useState<any>(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<any>(null);

  // helper function to reformat date
  function formatDate(dateString: string) {
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  }

  useEffect(() => {
    const getJob = async () => {
      try {
        const jobData = await fetchData(`/jobs/user/${user_id}/post/${job_id}`);
        if (jobData.length > 0) {
          const job = jobData[0];
          setTitle(job.title || '');
          setCompanyName(job.company_name || '');
          setJobURL(job.joburl || '');
          setLocation(job.location || '');
          setDateApplied(formatDate(job.date_applied) || '');
          setApplicationStatus(job.application_status || '');
          if (job.interview_type == null) {
            setInterviewType('');
          } else {
            setInterviewType(job.interview_type || '');
          }
          if (job.interview_date == null) {
            setInterviewDate('');
          } else {
            setInterviewDate(formatDate(job.interview_date) || '');
          }

          setSalary(job.salary || '');
          setFollowUp(job.follow_up || '');
          setNotes(job.notes || '');
        }
      } catch (error) {
        console.log('Error fetching job by id', error);
      }
    };
    getJob();
  }, [user_id, job_id]);

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    setLoading(true);
    try {
      const updateJob = await fetchUpdateJob(
        `/jobs/update/${user_id}/${job_id}`,
        title,
        companyName,
        jobURL,
        location,
        dateApplied,
        applicationStatus,
        interviewDate,
        interviewType,
        salary,
        followUp,
        notes,
        user_id,
        job_id
      ); // Replace 123 with the actual user ID
      // console.log('Update Job:', updateJob);
      // Reset form fields
      setTitle('');
      setCompanyName('');
      setJobURL('');
      setLocation('');
      setDateApplied('');
      setApplicationStatus('');
      setInterviewDate('');
      setInterviewType('');
      setSalary('');
      setFollowUp('');
      setNotes('');
      setError(null);
    } catch (error) {
      setError('Failed to create job');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <NavBar user={undefined} />

      <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
        {/* Input fields for job details */}
        {/* Remember to add appropriate onChange handlers */}
        <label>
          Title:
          <input className="text-black" type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
        </label>
        <label>
          Job URL:
          <input className="text-black" type="text" value={jobURL} onChange={(e) => setJobURL(e.target.value)} />
        </label>
        <label>
          Company:
          <input
            className="text-black"
            type="text"
            value={companyName}
            onChange={(e) => setCompanyName(e.target.value)}
          />
        </label>
        <label>
          Location:
          <input className="text-black" type="text" value={location} onChange={(e) => setLocation(e.target.value)} />
        </label>
        <label>
          Date Applied:
          <input
            className="text-black"
            type="text"
            value={dateApplied}
            onChange={(e) => setDateApplied(e.target.value)}
          />
        </label>
        <label>
          Application Status:
          <input
            className="text-black"
            type="text"
            value={applicationStatus}
            onChange={(e) => setApplicationStatus(e.target.value)}
          />
        </label>
        <label>
          Interview Date:
          <input
            className="text-black"
            type="text"
            value={interviewDate}
            onChange={(e) => setInterviewDate(e.target.value)}
          />
        </label>
        <label>
          Interview Type:
          <input
            className="text-black"
            type="text"
            value={interviewType}
            onChange={(e) => setInterviewType(e.target.value)}
          />
        </label>
        <label>
          Salary:
          <input className="text-black" type="text" value={salary} onChange={(e) => setSalary(e.target.value)} />
        </label>
        <label>
          Notes:
          <textarea className="text-black" value={notes} onChange={(e) => setNotes(e.target.value)} />
        </label>

        <button type="submit" disabled={loading}>
          Update Job
        </button>
        {error && <p>{error}</p>}
      </form>
    </>
  );
}
