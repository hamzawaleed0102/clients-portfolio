import { useRouter } from 'next/router';

const Porfolio = () => {
  const router = useRouter();
  console.log(`router`, router);
  return (
    <div>
      <div>Project {router.query.projectId}</div>
    </div>
  );
};
export default Porfolio;
