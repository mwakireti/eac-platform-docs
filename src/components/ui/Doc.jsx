import ReactMarkdown from "react-markdown";

const DocPage = ({ doc }) => {
  return (
    <article className="prose prose-slate dark:prose-invert max-w-3xl space-y-2">
      <ReactMarkdown>
        {doc}
      </ReactMarkdown>
    </article>
  );
};

export default DocPage;