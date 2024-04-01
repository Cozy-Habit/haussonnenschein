import { findInputError } from './findInputError';
import { isFormInvalid } from './isFormInvalid';
import { useFormContext } from 'react-hook-form';
import { AnimatePresence } from 'framer-motion';

// import { AnimatePresence, motion } from ' framer-motion';
import { MdError } from 'react-icons/md';
import { motion } from 'framer-motion';

// export const Input = ({ text, type, id, classname, small, message_validation}) => {

//     const { register } = useFormContext();

//     if(!small){
//     return(
//         <div className="input-text">
//             <label htmlFor={id}>
//                 {text}
//             </label>
//             <input id={id} type={type} className={"input " + classname}
//             {...register(id, {
//                 required: {
//                   value: true,
//                   message: 'required',
//                 },
//               })}
//               />
//         </div>
//     );
//     }else{
//     return(
//         <div className="small-input-text">
//             <label htmlFor={id}>
//                 {text}
//             </label>
//             <input id={id} type={type} className={"input " + classname} 
//             {...register(id, {
//                 required: {
//                   value: true,
//                   message: 'required',
//                 },
//               })}
//               />
//         </div>
//     );
//     }
// }

export const Input = ({ name, label, type, id, placeholder, validation, small, textarea }) => {
  const {
    register,
    //this looks for errors in the form itself
    formState: { errors },
  } = useFormContext()

  //the function findInputErrors analyses if there are any errors on certain labels
  const inputError = findInputError(errors, name)
  const isInvalid = isFormInvalid(inputError)

  if (textarea) {
    return (
      <>
        {/* htmlFor is indicatin to which input id value it belongs to */}
        <label htmlFor={id} className="label-textarea">
          {label}
        </label>


        <textarea className="textarea"
          id={id}
          type={type}
          placeholder={placeholder}
          {...register(name, validation)}
        />
      </>
    );

  } else if (!small) {
    return (
      <div className="input-text">
        {/* htmlFor is indicatin to which input id value it belongs to */}
        <label htmlFor={id}>
          {label}
        </label>
        <input className="input"
          id={id}
          type={type}
          placeholder={placeholder}
          {...register(name, validation)}
        />
        {/* this is an animation component */}
        <AnimatePresence mode="wait" initial={false}>
          {isInvalid && (
            <InputError
              message={inputError.error.message}
              key={inputError.error.message}
            />
          )}
        </AnimatePresence>

      </div>
    )
  } else {
    return (
      <div className="small-input-text">

        {/* htmlFor is indicatin to which input id value it belongs to */}
        <label htmlFor={id}>
          {label}
        </label>
        <input
          className="input"
          id={id}
          type={type}
          placeholder={placeholder}
          {...register(name, validation)}
        />
        {/* this is an animation component */}
        <AnimatePresence mode="wait" initial={false}>
          {isInvalid && (
            <InputError
              message={inputError.error.message}
              key={inputError.error.message}
            />
          )}
        </AnimatePresence>

      </div>
    )
  }
}

const InputError = ({ message }) => {
  return (
    //this is just the animation for the error messages
    <span className="error">
      <motion.p
        {...framer_error}
      >
        {/* this is just an icon */}
        <MdError />
        {message}
      </motion.p>
    </span>
  )
}

const framer_error = {
  initial: { opacity: 0, y: 10 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 10 },
  transition: { duration: 0.2 },
}



export default Input;