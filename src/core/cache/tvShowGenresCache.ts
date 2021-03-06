import Cache from './cache';
import {getMovieGenres} from '../../services/TMDDataLoaders';
import { Genre } from '../../models/types/genre';


export const tvGenresCache=new Cache<Genre, number>(getMovieGenres);