import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const SearchLabel = styled.label`
  position: absolute;
  top: -100%;
  left: 0;
`;

const SearchInput = styled.input`
  appearance: none;
  background: transparent;
  border: 0;
  border-radius: 0;
  margin: 0;
  padding: 1rem 0 1rem 1rem;
  height: 6rem;

  font-family: var(--font-family-mono);
  font-size: 1.6rem;
  color: var(--color-white);
  width: 100%;
  height: 6rem;
  transition: background-color 0.2s ease-in-out;

  &::-webkit-search-cancel-button {
    position: relative;
    -webkit-appearance: none;
    display: none;
    // height: 2rem;
    // width: 2rem;
    // border-radius: 2rem;
    // background: white;

    // &::before,
    // &::after {
    //   content: '';
    //   background-color: black;
    //   position: absolute;
    //   top: 50%;
    //   left: 50%;
    //   width: 0.2rem;
    //   height: 1.5rem;
    // }

    // &::before {
    //   transform: rotate(-45deg);
    // }

    // &::after {
    //   transform: rotate(45deg);
    // }
  }

  &:focus {
    outline: none;
    background-color: #111;
  }

  @media all and (min-width: 768px) {
    padding: 1rem 2rem;
  }
`;

class GlobalSearch extends Component {
  constructor(props) {
    super(props);

    this.state = {
      text: props.search,
    };

    this.onInputChange = this.onInputChange.bind(this);
  }

  onInputChange(evt)  {
    this.setState({
      [evt.target.name]: evt.target.value,
    }, () => {
      this.props.onChange(this.state.text);
    });
  }

  render() {
    const {
      forwardedRef,
    } = this.props;

    const {
      text,
    } = this.state;

    return (
      <React.Fragment>
        <SearchLabel htmlFor="search">Search</SearchLabel>
        <SearchInput
          type="search"
          name="text"
          id="search"
          placeholder="Search packages | pkg:[package-name] | @[username]"
          autocapitalize="none"
          autocomplete="off"
          autocorrect="off"
          autoFocus
          ref={forwardedRef}
          value={text}
          onChange={this.onInputChange}
        />
      </React.Fragment>
    );
  }
}

GlobalSearch.propTypes = {
  search: PropTypes.string,
  onChange: PropTypes.func,
};

GlobalSearch.defaultProps = {
  search: '',
  onChange: () => {},
};

export default GlobalSearch;
