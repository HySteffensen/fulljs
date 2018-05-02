var env = process.env;

export const nodeEnv = env.NODE_ENV || 'development';

export const logStars = function(message) {
  console.info('********');
  console.info(message);
  console.info('********');
};

// exports { port: 8080 }
export default {
  port: env.PORT || 8080
};
