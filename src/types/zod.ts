import z from "zod";

export const condusefFormSchema = z.object({
    NUM_ENTE: z.number(),
    CVE_SUCUR: z.number(),

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

    BAN_MONET: z.boolean().optional(),
    BAN_REVER: z.boolean().optional(),

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
})
export type Form = z.infer<typeof condusefFormSchema>

export type reuneForm = Pick<Form, 'BAN_MONET' | 'BAN_PORI' | 'BAN_REVER' | 'CVE_EDOCP' | 'CVE_NIVAT' | 'CVE_Queja' | 'CVE_SEXO' | 'CVE_SUCUR' | 'CVE_TRIM' | 'FEC_ABONO' | 'FEC_ATEN' | 'FEC_NOTI' | 'FEC_REGIS' | 'FEC_RESOL' | 'MONT_ABOUS' | 'MONT_RECLA' | 'NOM_CoEnt' | 'NOM_INST' | 'NOM_SECT' | 'NUM_COL' | 'NUM_CPOS' | 'NUM_EDAD' | 'NUM_ENTE' | 'NUM_ENTFE' | 'NUM_FOCON' | 'NUM_FOLIO' | 'NUM_LOCAL' | 'NUM_MEDRC' | 'NUM_MUNI' | 'NUM_PRODU' | 'NUM_Tlfno' | 'TIP_CAUSA' | 'TIP_Corre' | 'TIP_ENTE' | 'TIP_LOCAL' | 'TIP_RESOL'>

