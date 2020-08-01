import CMS from 'netlify-cms-app';
import { TagControl, TagPreview } from '../components/tagWidget';

CMS.registerWidget('tags', TagControl, TagPreview);
