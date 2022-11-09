import Head from "next/head";
import { company } from "../../data/company";

type metaProps = {
  title?: string;
  description?: string;
};

export default function Meta({ title, description }: metaProps) {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
    </Head>
  );
}
Meta.defaultProps = {
  title: company.name,
  description: "E-commerce",
};
