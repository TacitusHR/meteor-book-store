import {Mongo} from 'meteor/mongo';

/**
 * Due to the way that the Mocha testing framework—one of the tools supported by
 * Chimp—interacts with our collection, here we make Books a global variable instead of
 * exporting it (this is why we imported the entire file directly above instead of
 * destructuring the export like import { Books } from '../../api/books/books';).
 */
const Books = new Mongo.Collection('books');
export default Books;
