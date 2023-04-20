import Layout from "../../componenst/Layout";
import Portafolio from "../../componenst/Portafolio";

const Blog = () => (
  <Layout footer={false}>
    <div className="row">
      <h1>Blog</h1>
      <Portafolio />
      <Portafolio />
      <Portafolio />
      <Portafolio />
      <Portafolio />
    </div>
  </Layout>
);

export default Blog;
