
import { StyleSheet } from 'react-native';

export const doctorStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  content: {
    paddingBottom: 20,
  },
  sectionTitle: {
    fontSize: 17,
    fontWeight: '700',
    color: '#365FF5',
    paddingHorizontal: 17,
    marginTop: 15,
    marginBottom: 10,
  },
  profileCard: {
    marginHorizontal: 17,
    backgroundColor: '#D1DAFF',
    borderRadius: 20,
    padding: 15,
    marginBottom: 12,
  },
  profileTop: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  profileAvatar: {
    width: 90,
    height: 90,
    borderRadius: 50,
    backgroundColor: '#B8C7DF',
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatarText: {
    color: '#FFFFFF',
    fontSize: 25,
    fontWeight: '700',
  },
  profileName: {
    flex: 1,
    fontSize: 15,
    color: '#3658B9',
    fontWeight: '700',
  },
  description: {
    fontSize: 12,
    color: '#53618B',
    lineHeight: 19,
    marginTop: 12,
  },
  blueButton: {
    backgroundColor: '#365FF5',
    borderRadius: 18,
    paddingVertical: 11,
    alignItems: 'center',
    marginTop: 12,
  },
  buttonText: {
    color: '#FFFFFF',
    fontWeight: '700',
    fontSize: 12,
  },
  serviceItem: {
    marginHorizontal: 17,
    marginBottom: 10,
    backgroundColor: '#365FF5',
    borderRadius: 15,
    padding: 13,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  serviceName: {
    color: '#FFFFFF',
    fontSize: 12,
    fontWeight: '600',
  },
  serviceDescription: {
    color: '#E4E9FF',
    fontSize: 10,
    marginTop: 3,
  },
  empty: {
    textAlign: 'center',
    color: '#8291B7',
    marginTop: 35,
    fontSize: 14,
  },
});
