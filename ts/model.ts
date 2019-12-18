import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;
export const deviceSchema = new Schema(
{fk_info:{
    face_data_ver:{type:Number},
    firmware:{type:String},
    firmware_filename:{type:String},
    fk_bin_data_lib:{type:String},
    fp_data_ver:{type:Number},
    gps_location:{type:String},//002650.0,3019.9634N,12006.1922E,2.5,146.0,2,0.3020.0438N,12006.1391E
    supported_enroll_data:{type:[]}},//"PASSWORD","IDCARD","FACE","FP"
    fk_name:{type:String},
    fk_time:{type:String}}
);
export const userInfoSchema = new Schema({
    enroll_data_array:
    [{backup_number:{type:Number},enroll_data:{type:String}},
    {backup_number:{type:Number},enroll_data:{type:String}}
    ],
    user_id:{type:Number},
    user_name:{type:String},
    user_photo:{type:String},
    user_privilege:{type:String}
    });