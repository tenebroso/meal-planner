import { colors } from '../../styles';

const PageTitle = ({
  title,
}) => (
  <>
    <h1 className="pageTitle">{title}</h1>
    <style global jsx>
      {`
        .pageTitle {
          margin: 0 0 2rem;
          text-align: center;
          padding: 10px;
          background-color: ${colors.grey.dark};
          display: block;
          color: ${colors.white};
        }
      `}
    </style>
  </>
);

export default PageTitle;
