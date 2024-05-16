import JobCard from "~/components/JobCard";

const Home = () => {
  return (
    <>
      <h1 className="mt-14 mb-2 text-3xl font-bold text-center">
        New Jobs Posted Daily – Apply Now!
      </h1>
      <p className="text-center mb-14 text-lg">
        Find the perfect job that matches your skills and aspirations on our job
        board.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
        {Array(10)
          .fill(null)
          .map((index, idx) => (
            <JobCard key={idx} data={idx} />
          ))}
      </div>
    </>
  );
};

export default Home;
