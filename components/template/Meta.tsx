import Head from "next/head";

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
  title: "Seaki",
  description: "E-commerce",
};
