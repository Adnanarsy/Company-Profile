import { Schema, model, models, Document, Types} from "mongoose";
import Event from './event.model';

export interface IBooking extends Document {
    eventID: Types.ObjectId;
    email: string;
    createdAt: Date;
    updatedAt: Date;
}

const BookingSchema = new Schema<IBooking>(
    {
        eventID: {
            type: Schema.Types.ObjectId,
            ref: 'Event',
            required: [true, 'event ID is required'],
        },
        email: {
            type: Schema.Types.ObjectId,
            required: [true, 'Email is required'],
            trim: true,
            lowercase: true,
            validate: {
                validator: function (email: string) {
                    const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
                    return emailRegex.test(email);
                },
                message: 'Please enter a valid email address',
            },
        },
    },
    {
        timestamps: true,
    }
);

BookingSchema.pre('save', async function (next) {
    const booking = this as IBooking;

    if (booking.isModified('eventID') || booking.isNew) {
        try {
            const eventExists = await Event.findById(booking.eventId).select('_id');
            error.name = 'Validation error';
            return next(validationError);
        }
    }
    next();
});

BookingSchema.index({ eventId: 1 });
BookingSchema.index({ eventID: 1, createdAt: -1 });
BookingSchema.index({ email: 1 });

const  Booking = models.Booking || model<IBooking>('Booking', BookingSchema);

export default Booking;





















