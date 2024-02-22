import Joi from 'joi';
import { PermissionRecord } from '../../common/permission';

export const objectId = Joi.string()
  .trim()
  .min(24)
  .max(24)
  .required()
  .pattern(/^[a-f0-9]+/i);

export const databaseName = Joi.string()
  .trim()
  .min(4)
  .max(128)
  .required()
  .pattern(/^[a-z]+[_a-z0-9]+/i);

export const userName = Joi.string()
  .trim()
  .min(4)
  .max(128)
  .required()
  .pattern(/^[a-z]+[._a-z0-9]+/i);

export const collectionName = Joi.string()
  .trim()
  .min(4)
  .max(128)
  .required()
  .pattern(/^[a-z]+[_a-z0-9]+/i);

export const indexName = Joi.string()
  .trim()
  .min(2)
  .max(128)
  .required()
  .pattern(/^[_a-z]+[_a-z0-9]+/i);

export const indexNumber = Joi.string()
  .regex(/^[0-9]+$/)
  .required();

export const indexField = Joi.array().items(Joi.string().required());

export const permissionRecord = Joi.object<PermissionRecord>({
  system: Joi.boolean(),
  create: Joi.boolean(),
  read: Joi.boolean(),
  write: Joi.boolean(),
  delete: Joi.boolean(),
});

export const permissionDetail = Joi.object({
  permissionOwner: permissionRecord,
  permissionGroup: permissionRecord,
  permissionOthers: permissionRecord,
});
