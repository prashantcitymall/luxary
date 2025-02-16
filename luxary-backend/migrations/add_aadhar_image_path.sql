-- Add aadhar_image_path column
ALTER TABLE users
DROP COLUMN IF EXISTS aadhar_proof,
ADD COLUMN IF NOT EXISTS aadhar_image_path VARCHAR(255);
