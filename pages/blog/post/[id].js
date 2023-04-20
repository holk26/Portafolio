import Layout from "../../../componenst/Layout";
import Portafolio from "../../../componenst/Portafolio";

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