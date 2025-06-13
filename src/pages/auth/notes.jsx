import { notesAPI } from "../../PT5/sevices/noteAPI";
import React, { useState, useEffect } from "react";
import AlertBox from "../../components/AlertBox";
import EmptyState from "../../components/EmptyState";
import GenericTable from "../../components/GenericTable";
import LoadingSpinner from "../../components/LoadingSpinner";
import { AiFillDelete, AiFillEdit } from "react-icons/ai";

function Notes() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [notes, setNotes] = useState([]);

  const [dataForm, setDataForm] = useState({
    title: "",
    content: "",
    status: "",
  });

  const [isEditing, setIsEditing] = useState(false);
  const [editId, setEditId] = useState(null);

  // Load semua notes dari API
  const loadNotes = async () => {
    try {
      setLoading(true);
      const data = await notesAPI.fetchNotes();
      setNotes(data);
      setError("");
    } catch (err) {
      setError(`Gagal memuat data: ${err.message}`);
    } finally {
      setLoading(false);
    }
  };

  // Load notes saat komponen pertama kali render
  useEffect(() => {
    loadNotes();
  }, []);

  // Handle perubahan input form
  const handleChange = (evt) => {
    const { name, value } = evt.target;
    setDataForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Submit form untuk tambah atau update
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);
      setError("");
      setSuccess("");

      if (isEditing) {
        await notesAPI.updateNote(editId, dataForm);
        setSuccess("Catatan berhasil diperbarui!");
      } else {
        await notesAPI.createNote(dataForm);
        setSuccess("Catatan berhasil ditambahkan!");
      }

      setDataForm({ title: "", content: "", status: "" });
      setIsEditing(false);
      setEditId(null);

      await loadNotes();

      setTimeout(() => setSuccess(""), 3000);
    } catch (err) {
      setError(`Terjadi kesalahan: ${err.message}`);
    } finally {
      setLoading(false);
    }
  };

  // Hapus catatan
  const handleDelete = async (id) => {
    const konfirmasi = confirm("Yakin ingin menghapus catatan ini?");
    if (!konfirmasi) return;

    try {
      setLoading(true);
      setError("");
      setSuccess("");

      await notesAPI.deleteNote(id);

      setSuccess("Catatan berhasil dihapus!");
      await loadNotes();

      setTimeout(() => setSuccess(""), 3000);
    } catch (err) {
      setError(`Terjadi kesalahan: ${err.message}`);
    } finally {
      setLoading(false);
    }
  };

  // Isi form untuk edit
  const handleEdit = (note) => {
    setIsEditing(true);
    setEditId(note.id);
    setDataForm({
      title: note.title,
      content: note.content,
      status: note.status || "",
    });
  };

  return (
    <div className="max-w-2xl mx-auto p-6">
      <div className="mb-6">
        <h2 className="text-3xl font-bold text-gray-800 mb-2">Notes App</h2>
      </div>

      {error && <AlertBox type="error">{error}</AlertBox>}
      {success && <AlertBox type="success">{success}</AlertBox>}

      {/* Form Tambah / Edit Catatan */}
      <div className="bg-white rounded-2xl shadow-lg p-6 mb-6">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">
          {isEditing ? "Edit Catatan" : "Tambah Catatan Baru"}
        </h3>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="title"
            value={dataForm.title}
            placeholder="Judul catatan"
            onChange={handleChange}
            required
            disabled={loading}
            className="w-full p-3 bg-gray-50 rounded-2xl border border-gray-200 focus:outline-none
              focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all
              duration-200"
          />

          <textarea
            name="content"
            value={dataForm.content}
            placeholder="Isi catatan"
            onChange={handleChange}
            required
            disabled={loading}
            rows="2"
            className="w-full p-3 bg-gray-50 rounded-2xl border border-gray-200 focus:outline-none
              focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all
              duration-200 resize-none"
          />

          <button
            type="submit"
            disabled={loading}
            className="px-6 py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold
              rounded-2xl focus:outline-none focus:ring-2 focus:ring-emerald-500
              focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed
              transition-all duration-200 shadow-lg"
          >
            {loading
              ? "Mohon Tunggu..."
              : isEditing
              ? "Update Catatan"
              : "Tambah Catatan"}
          </button>
        </form>
      </div>

      {/* Tabel daftar catatan */}
      {loading && notes.length === 0 ? (
        <LoadingSpinner />
      ) : notes.length === 0 ? (
        <EmptyState text="Belum ada catatan" />
      ) : (
        <GenericTable
          columns={["NO", "Judul", "Isi Catatan", "Aksi"]}
          data={notes}
          renderRow={(note, index) => (
            <>
              <td className="px-6 py-4">{index + 1}</td>
              <td className="px-6 py-4 max-w-xs truncate">{note.title}</td>
              <td className="px-6 py-4 max-w-xs truncate">{note.content}</td>
              <td className="px-6 py-4 max-w-xs flex space-x-4">
                <button
                  onClick={() => handleEdit(note)}
                  disabled={loading}
                  title="Edit Catatan"
                  className="text-blue-500 hover:text-blue-700"
                >
                  <AiFillEdit className="text-2xl" />
                </button>
                <button
                  onClick={() => handleDelete(note.id)}
                  disabled={loading}
                  title="Hapus Catatan"
                >
                  <AiFillDelete className="text-red-400 text-2xl hover:text-red-600 transition-colors" />
                </button>
              </td>
            </>
          )}
        />
      )}
    </div>
  );
}

export default Notes;
