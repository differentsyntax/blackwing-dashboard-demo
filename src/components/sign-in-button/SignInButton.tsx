import { FaUser } from 'react-icons/fa';

/**
 * SignInButton component for user sign-in functionality.
 *
 * @component
 * @returns {JSX.Element} - The rendered SignInButton component.
 */
const SignInButton = () => {
  return (
    <button className="m-auto rounded-full bg-zinc-900 h-10 w-32 mr-4 text-white text-lg flex justify-center items-center">
        <FaUser className="text-white w-10 h-5"/>
        <p className="mr-2">Sign in</p>
    </button>
  )
}

export default SignInButton;
