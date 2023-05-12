import './styles.css';

export const TextInput = ({ searchValue, handleChange }) => {
  return <input onChange={handleChange} value={searchValue} type="search" placeholder="type your search 🔍" />;
};
