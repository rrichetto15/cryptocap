import styled from 'styled-components';

const Article = ({ article }) => {
  const {
    url,
    imageurl,
    title,
    source_info: { name },
  } = article;

  return (
    <ExternalLink href={url} target="_blank" rel="noreferrer">
      <img src={imageurl} alt={title} />
      <div>
        <h3 className="title">{title}</h3>
        <p className="source">{name}</p>
      </div>
    </ExternalLink>
  );
};

const ExternalLink = styled.a`
  display: flex;
  align-items: center;
  gap: 2rem;
  padding: 1rem 1.5rem;
  border-radius: 4px;
  text-decoration: none;
  color: var(--text-color);

  &:hover {
    background: var(--bg-color);
  }

  img {
    height: 6rem;
    border-radius: 4px;
  }

  h3 {
    font-size: 1.6rem;
    margin-bottom: 2.5px;
  }

  p {
    font-size: 1.4rem;
  }
`;

export default Article;
