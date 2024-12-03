import RedecoForm from "../components/Forms/RedecoForm";
import ReuneForm from "../components/Forms/ReuneForm";

export default function IndexPage() {
  return (
    <>
      <main className="p-8 bg-slate-50 rounded-2xl w-9/12 mx-auto">
        <div className="flex justify-center bg-teal-500 rounded-2xl mb-12">
          <select name="empresa" id="empresa" className="w-1/4 my-10 text-center">
            <option value="reune" selected>REUNE</option>
            <option value="redeco">REDECO</option>
          </select>
        </div>

        <ReuneForm />
        <RedecoForm/>
      </main>
    </>
  )
}
