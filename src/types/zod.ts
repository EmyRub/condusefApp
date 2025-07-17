import z from "zod";

export const condusefFormSchema = z.object({
    NUM_ENTE: z.number(),
    CVE_SUCUR: z.number(),

    NOM_SUCUR: z.string(),

    NOM_CoEnt: z.string(),
    TIP_Corre: z.string(),
    NUM_Tlfno: z.number(),
    CVE_SEXO: z.string(),
    TIP_ENTE: z.number(),
    NUM_EDAD: z.number(),
    BAN_PORI: z.boolean(),

    CVE_TRIM: z.number(),
    NUM_PRODU: z.string(),
    FEC_REGIS: z.date(),
    FEC_ATEN: z.date(),
    NUM_FOLIO: z.string(),
    NUM_FOCON: z.string(),
    CVE_Queja: z.number(),
    CVE_EDOCP: z.number(),
    CVE_NIVAT: z.number(),
    NUM_MEDRC: z.number(),
    TIP_CAUSA: z.string(),

    NUM_CAUSA: z.number(),

    BAN_MONET: z.boolean().optional(),
    BAN_REVER: z.boolean().optional(),
    BAN_OPEXT: z.boolean().optional(),

    FEC_NOTI: z.date().optional(),
    FEC_RESOL: z.date().optional(),
    TIP_RESOL: z.number().optional(),

    MONT_RECLA: z.number().optional(),
    FEC_ABONO: z.date().optional(),
    MONT_ABOUS: z.number().optional(),

    NOM_INST: z.string(),
    NOM_SECT: z.string(),
    NUM_CPOS: z.number(),
    NUM_COL: z.number(),
    NUM_ENTFE: z.number(),
    NUM_MUNI: z.number(),
    NUM_LOCAL: z.number(),
    TIP_LOCAL: z.number(),

    NUM_QuPen: z.number().optional(),
    NUM_IdPen: z.number().optional(),

})
export type Form = z.infer<typeof condusefFormSchema>

export type tableCondusef = Pick<Form, 'NUM_ENTE' | 'NOM_CoEnt' | 'FEC_REGIS' | 'NUM_FOCON'>

export type datacausaForm = Pick<Form, 'TIP_CAUSA' | 'NUM_CAUSA'>
export type noClientForm = Pick<Form, 'CVE_SEXO' | 'NOM_CoEnt' | 'NUM_EDAD' | 'NUM_Tlfno' | 'TIP_Corre' | 'TIP_ENTE'>
export type dataClientForm = Pick<Form, 'CVE_SEXO' | 'NOM_CoEnt' | 'NUM_EDAD' | 'NUM_Tlfno' | 'TIP_Corre' | 'TIP_ENTE' | 'NUM_ENTE'>
export type newDirectionForm = Pick<Form, 'NUM_CPOS' | 'NUM_LOCAL' | 'NUM_ENTFE' | 'NUM_MUNI'>
export type dataDirectionForm = Pick<Form, 'NUM_CPOS' | 'NUM_LOCAL' | 'NUM_ENTFE' | 'NUM_MUNI' | 'CVE_SUCUR' | 'NOM_SUCUR'>

export type reuneForm = Pick<Form, 'BAN_MONET' | 'BAN_PORI' | 'BAN_REVER' | 'BAN_OPEXT' | 'CVE_EDOCP' | 'CVE_NIVAT' | 'CVE_Queja' | 'CVE_SEXO' | 'CVE_SUCUR' | 'CVE_TRIM' | 'FEC_ABONO' | 'FEC_ATEN' | 'FEC_NOTI' | 'FEC_REGIS' | 'FEC_RESOL' | 'MONT_ABOUS' | 'MONT_RECLA' | 'NOM_CoEnt' | 'NOM_INST' | 'NOM_SECT' | 'NUM_COL' | 'NUM_CPOS' | 'NUM_EDAD' | 'NUM_ENTE' | 'NUM_ENTFE' | 'NUM_FOCON' | 'NUM_FOLIO' | 'NUM_LOCAL' | 'NUM_MEDRC' | 'NUM_MUNI' | 'NUM_PRODU' | 'NUM_Tlfno' | 'TIP_CAUSA' | 'TIP_Corre' | 'TIP_ENTE' | 'TIP_LOCAL' | 'TIP_RESOL'>
export type redecoForm = Pick<Form, 'BAN_PORI' | 'CVE_EDOCP' | 'CVE_NIVAT' | 'CVE_Queja' | 'CVE_SEXO' | 'CVE_SUCUR' | 'CVE_TRIM' | 'FEC_ATEN' | 'FEC_NOTI' | 'FEC_REGIS' | 'FEC_RESOL' | 'NOM_CoEnt' | 'NOM_INST' | 'NOM_SECT' | 'NUM_COL' | 'NUM_CPOS' | 'NUM_EDAD' | 'NUM_ENTE' | 'NUM_ENTFE' | 'NUM_FOCON' | 'NUM_FOLIO' | 'NUM_LOCAL' | 'NUM_MEDRC' | 'NUM_MUNI' | 'NUM_PRODU' | 'NUM_Tlfno' | 'TIP_CAUSA' | 'TIP_Corre' | 'TIP_ENTE' | 'TIP_LOCAL' | 'TIP_RESOL' | 'NUM_QuPen' | 'NUM_IdPen'>


export const searchKeySchema = z.object({
    ID_KEY: z.number(),
    CONTENT: z.string()
})
export type searchKey = z.infer<typeof searchKeySchema>