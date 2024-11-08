import { FaUser } from 'react-icons/fa';
import { Link } from 'react-router-dom';

/**
 * SignInButton component for user sign-in functionality.
 *
 * @component
 * @returns {JSX.Element} - The rendered SignInButton component.
 */
const SignInButton = () => {
  return (
    <Link to="/login" className="hover:text-gray-300 m-auto rounded-full bg-zinc-900 h-10 w-32 mr-4 text-white text-lg flex justify-center items-center">
      <button className="flex items-center space-x-2">
        <FaUser className="text-white w-5 h-5" />
        <p>Sign in</p>
      </button>
    </Link>
  )
}

export default SignInButton;
