import { Form } from "react-router";
import {changePasswordAction as action} from "~/services/back-office/loginService.server";
export {action};

export default function ChangePasswordPopup({ onClose }: { onClose: () => void }) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-6 rounded shadow-md">
        <h2 className="text-lg font-bold mb-4">Changer votre mot de passe</h2>
        <Form method="post" action="/change">
          <input
            type="password"
            name="newPassword"
            placeholder="Nouveau mot de passe"
            className="border p-2 mb-4 rounded w-full"
            required
          />
          <input
            type="password"
            name="confirm"
            placeholder="Confirmer le nouveau mot de passe"
            className="border p-2 mb-4 rounded w-full"
            required
          />
          <div className="flex justify-end gap-2">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 rounded border"
            >
              Annuler
            </button>
            <button
              type="submit"
              className="px-4 py-2 rounded bg-blue-500 text-white"
            >
              Valider
            </button>
          </div>
        </Form>
      </div>
    </div>
  );
}
