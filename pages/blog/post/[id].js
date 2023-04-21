import Layout from "../../../components/Layout";
import Portafolio from "../../../components/Portafolio";

const Post = () => (
  <Layout footer={false}>
    <div className="row">
      <h1>Post</h1>
      <Portafolio />
      <Portafolio />
      <Portafolio />
      <Portafolio />
      <Portafolio />
    </div>
  </Layout>
);

export default Post;