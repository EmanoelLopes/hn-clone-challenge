import styled from 'styled-components';

export const PostData = styled.div`
  display: flex;
  align-items: center;
  overflow-wrap: break-word;
  word-wrap: break-word;
  hyphens: auto;

  .up-votes {
    margin-right: 1rem;
    display: flex;
    flex-direction: column;
    font-size: 22px;
    
    span {
      border: 1px solid #ddd;
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: 700;
      width: 40px;
      height: 40px;
    }

    span .svg-inline--fa {
      color: #e74c3c;
    }
  }

  .post {
    margin: 1rem 0;

    &-link {
      color: #ccc;
      display: block;
      font-size: 13px;
      font-weight: 700;
      margin: .5rem 0;
      text-transform: uppercase;
      
      &:hover {
        text-decoration: underline;
      }
    }

    &-title {
      color: #333;
      font-size: 24px;
      margin-bottom: .5rem;
    }

    &-resume {
      align-items: center;
      display: flex;
      padding: .5rem 0;

      .category {
        background-color: #ddd;
        border-radius: 15px;
        color: #fff;
        font-size: 14px;
        font-weight: 600;
        margin-right: 1rem;
        padding: .25rem 1rem;
        text-transform: capitalize;

        &.ux_ui { background-color: #3498db; }
        &.case_study { background-color: #e67e22; }
        &.discussion { background-color: #2980b9; }
        &.product_design { background-color: #1abc9c; }
      }

      .author,
      .comments,
      .date,
      .edit {
        margin-right: 1rem;
        font-size: 13px;
      }

      .date { color: #999; }

      .author > a,
      .comments > a,
      .edit > a {
        color: #e74c3c;
        text-decoration: underline;
      }

      .author > a > .svg-inline--fa,
      .comments > a > .svg-inline--fa {
        margin: 0 .25rem;
      }
    }
  }
`;
