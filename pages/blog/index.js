import Layout from "../../components/Layout";
import Portafolio from "../../components/Portafolio";

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
