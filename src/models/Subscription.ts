import { Schema, model, Types } from 'mongoose';

const subscriptionSchema = new Schema({
  user: { type: Types.ObjectId, ref: 'User', required: true },
  plan: { type: String, required: true },
  startDate: { type: Date, default: Date.now },
  status: { type: String, enum: ['active', 'paused', 'cancelled'], default: 'active' },
}, { timestamps: true });

export default model('Subscription', subscriptionSchema);

