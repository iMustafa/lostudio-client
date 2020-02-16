import { NextPage } from 'next';

const AddDashboard: NextPage<{ userAgent: string }> = ({ userAgent }) => (
  <h1>Hello world! - user agent: {userAgent}</h1>
);

AddDashboard.getInitialProps = async ({ req }) => {
  const userAgent = req ? req.headers['user-agent'] || '' : navigator.userAgent;
  return { userAgent };
};

export default AddDashboard;