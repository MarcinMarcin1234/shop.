const transition = { duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96] };

export const imageVariantsInit = {
    enter: { 
        transition: { 
            staggerChildren: 0.1,
        } 
    }
}

export const imageVariants = {
    enter: {
        opacity: 1,
        scale: 1,
        transition
    },
    exit: {
        opacity: 0.1,
        scale: 0.5,
        transition
    }
}

export const containerVariants = {
    enter:{
        opacity: 1,
        scale: 1,
        transition
    },
    exit: {
        opacity: 0.1,
        scale: 0.75,
        transition
    }
}