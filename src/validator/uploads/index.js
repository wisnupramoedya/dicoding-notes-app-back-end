const { ImageHeadersSchema } = require('./schema');
const InvariantError = require('../../exceptions/InvariantError');

const UploadsValidator = {
  validateUploadImagesPayload: (headers) => {
    const validationResult = ImageHeadersSchema.validate(headers);

    if (validationResult.error) {
      throw new InvariantError(validationResult.error.message);
    }
  },
};

module.exports = UploadsValidator;
