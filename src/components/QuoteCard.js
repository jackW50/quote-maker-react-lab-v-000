import React from 'react';

const QuoteCard = (props) =>
  <div>
    <div className="card card-inverse card-success card-primary mb-3 text-center">
      <div className="card-block">
        <blockquote className="card-blockquote">
           {props.quote.content}

          <footer> author <cite title="Source Title">{props.quote.author}</cite></footer>

        </blockquote>
      </div>
      <div className="float-right">
        <div className="btn-group btn-group-sm" role="group" aria-label="Basic example">
          <button
            type="button"
            className="btn btn-primary"
            value={props.quote.id}
            onClick={(event) => props.handleUpVote(event)}
          >
            Upvote
          </button>
          <button
            type="button"
            className="btn btn-secondary"
            value={props.quote.id}
            onClick={(event) => props.handleDownVote(event)}
          >
            Downvote
          </button>
          <button
            type="button"
            className="btn btn-danger"
            value={props.quote.id}
            onClick={(event) => props.handleRemove(event)}
          >
            <span aria-hidden="true">&times;</span>
          </button>
        </div>

        <div>Votes: {props.quote.votes}</div>
      </div>
    </div>
  </div>;

export default QuoteCard;
